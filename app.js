(function () {
  const grid = document.getElementById("project-grid");
  const filters = document.querySelectorAll(".filter");
  const modal = document.getElementById("project-modal");
  const modalClose = modal.querySelector(".modal-close");
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const langToggles = [
    document.getElementById("lang-toggle"),
    document.getElementById("lang-toggle-mobile"),
  ].filter(Boolean);

  let activeFilter = "all";
  let currentLang = getLang();

  function applyTranslations() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";

    document.querySelector('meta[name="description"]').content = t(
      currentLang,
      "meta.description"
    );
    document.title = t(currentLang, "meta.title");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(currentLang, el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(currentLang, el.dataset.i18nHtml);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.dataset.i18nAttr.split(";");
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(currentLang, key));
      });
    });

    filters.forEach((btn) => {
      const filterKey = btn.dataset.filter;
      const i18nKey =
        filterKey === "all"
          ? "work.filters.all"
          : `work.filters.${filterKey}`;
      btn.textContent = t(currentLang, i18nKey);
    });

    const switchKey =
      currentLang === "zh" ? "lang.switchToEn" : "lang.switchToZh";
    const label = t(currentLang, switchKey);
    const btnText =
      currentLang === "zh"
        ? t(currentLang, "lang.en")
        : t(currentLang, "lang.zh");
    langToggles.forEach((btn) => {
      btn.setAttribute("aria-label", label);
      btn.textContent = btnText;
    });

    document.getElementById("footer-rights").textContent = t(
      currentLang,
      "footer.rights"
    );

    document.documentElement.style.setProperty(
      "--watermark-text",
      `"${t(currentLang, "copyright.watermark")}"`
    );

    renderProjects(activeFilter);
  }

  function sortProjects(list) {
    return [...list].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }

  const GRID_FADE_MS = 220;

  function renderProjects(filter) {
    const filtered =
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter);
    const list = sortProjects(filtered);

    const paint = () => {
      grid.innerHTML = "";
      grid.classList.remove("is-ready");

      list.forEach((project, index) => {
        const title = projectField(project, "title", currentLang);
        const cat = categoryLabel(currentLang, project.category);

        const card = document.createElement("button");
        card.type = "button";
        card.className = "project-card";
        card.dataset.id = project.id;
        card.style.transitionDelay = `${Math.min(index * 0.06, 0.42)}s`;
        const playBadge = project.video
          ? '<span class="project-play" aria-hidden="true">▶</span>'
          : "";
        card.innerHTML = `
        <div class="project-thumb${project.video ? " has-video" : ""}">
          <img src="${project.image}" alt="${title}" loading="lazy" width="800" height="600" />
          ${playBadge}
        </div>
        <div class="project-info">
          <p class="project-category">${cat}</p>
          <h3 class="project-title">${title}</h3>
          <p class="project-year">${project.year}</p>
        </div>
      `;
        card.addEventListener("click", () => openModal(project));
        grid.appendChild(card);
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => grid.classList.add("is-ready"));
      });
    };

    grid.classList.remove("is-ready");
    grid.classList.add("is-transitioning");
    window.setTimeout(() => {
      grid.classList.remove("is-transitioning");
      paint();
    }, GRID_FADE_MS);
  }

  function resetModalMedia() {
    const modalMedia = document.getElementById("modal-media");
    const modalImage = document.getElementById("modal-image");
    const modalGallery = document.getElementById("modal-gallery");
    const modalPdf = document.getElementById("modal-pdf");
    const modalVideo = document.getElementById("modal-video");
    const pdfLabel = document.getElementById("modal-pdf-label");
    const pdfLink = document.getElementById("modal-pdf-link");

    modalMedia.classList.remove("is-pdf", "is-gallery", "is-video");
    modalImage.hidden = true;
    modalImage.removeAttribute("src");
    modalGallery.hidden = true;
    modalGallery.innerHTML = "";
    modalPdf.hidden = true;
    modalPdf.removeAttribute("src");
    modalVideo.hidden = true;
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
    pdfLabel.hidden = true;
    pdfLink.hidden = true;
  }

  function openModal(project) {
    const title = projectField(project, "title", currentLang);
    const desc = projectField(project, "description", currentLang);
    const tags = projectField(project, "tags", currentLang);
    const cat = categoryLabel(currentLang, project.category);

    const modalMedia = document.getElementById("modal-media");
    const modalImage = document.getElementById("modal-image");
    const modalGallery = document.getElementById("modal-gallery");
    const modalPdf = document.getElementById("modal-pdf");
    const modalVideo = document.getElementById("modal-video");
    const pdfLabel = document.getElementById("modal-pdf-label");
    const pdfLink = document.getElementById("modal-pdf-link");

    document.getElementById("modal-category").textContent = cat;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-desc").textContent = desc;
    document.getElementById("modal-tags").innerHTML = tags
      .map((tag) => `<li>${tag}</li>`)
      .join("");

    resetModalMedia();

    if (project.pdf) {
      modalMedia.classList.add("is-pdf");
      modalImage.hidden = true;
      modalPdf.hidden = false;
      modalPdf.title = title;
      modalPdf.src = project.pdf;
      pdfLabel.hidden = false;
      pdfLabel.textContent = t(currentLang, "modal.pdfPreview");
      pdfLink.hidden = false;
      pdfLink.href = project.pdf;
      pdfLink.textContent = t(currentLang, "modal.viewPdf");
    } else if (project.video) {
      modalMedia.classList.add("is-video");
      modalImage.hidden = true;
      modalVideo.hidden = false;
      modalVideo.poster = project.image || "";
      modalVideo.src = project.video;
      pdfLabel.hidden = false;
      pdfLabel.textContent = t(currentLang, "modal.videoPreview");
    } else if (project.images?.length > 1) {
      modalMedia.classList.add("is-gallery");
      modalImage.hidden = true;
      modalGallery.hidden = false;
      modalGallery.innerHTML = project.images
        .map(
          (src, index) =>
            `<img src="${src}" alt="${title} — ${index + 1}" loading="lazy" />`
        )
        .join("");
    } else {
      modalImage.hidden = false;
      modalImage.src = project.image;
      modalImage.alt = title;
    }

    modal.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    resetModalMedia();
    modal.close();
    document.body.style.overflow = "";
  }

  function setLanguage(lang, animate = false) {
    if (lang !== "zh" && lang !== "en") return;
    currentLang = lang;
    setLang(lang);
    const main = document.getElementById("main");
    if (!animate) {
      applyTranslations();
      return;
    }
    main.style.opacity = "0";
    window.setTimeout(() => {
      applyTranslations();
      requestAnimationFrame(() => {
        main.style.opacity = "1";
      });
    }, 180);
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filter;
      if (value === activeFilter) return;
      activeFilter = value;
      filters.forEach((f) => {
        const isActive = f.dataset.filter === value;
        f.classList.toggle("is-active", isActive);
        f.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      renderProjects(value);
    });
  });

  langToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(currentLang === "zh" ? "en" : "zh", true);
    });
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  modal.addEventListener("cancel", () => {
    document.body.style.overflow = "";
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  });

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  if (typeof CONTACT !== "undefined") {
    const linkedinLink = document.getElementById("linkedin-link");
    const xhsLink = document.getElementById("xiaohongshu-link");
    if (linkedinLink && CONTACT.linkedin) linkedinLink.href = CONTACT.linkedin;
    if (xhsLink && CONTACT.xiaohongshu) xhsLink.href = CONTACT.xiaohongshu;
  }

  setLanguage(currentLang);
})();
