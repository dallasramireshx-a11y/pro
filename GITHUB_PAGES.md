# 发布到 GitHub · dallasramireshx-a11y

GitHub 账户：[dallasramireshx-a11y](https://github.com/dallasramireshx-a11y)

本地已完成 `git init` 和首次提交。按下面步骤即可获得**公开链接**。

## 第一步：在 GitHub 新建仓库

1. 打开 https://github.com/new  
2. **Repository name** 填：`lyjportfolio`（你当前的仓库名）  
3. 选 **Public**  
4. **不要**勾选 “Add a README”（本地已有文件）  
5. 点击 **Create repository**

## 第二步：推送代码

项目约 **210MB**，直接 `git push` 容易出现 `RPC failed / Connection was reset`。

**推荐：双击运行项目里的 `推送GitHub.bat`**（会自动用 Git LFS + 增大缓冲区）

或手动执行：

```powershell
cd C:\Users\l2090\Desktop\test1cursor

git lfs install
git lfs track "*.pdf"
git lfs track "*.mp4"
git add .gitattributes
git lfs migrate import --include="*.pdf,*.mp4" --everything

git -c http.version=HTTP/1.1 -c http.postBuffer=524288000 push -u origin main
```

首次推送会要求登录 GitHub。若仍失败，换网络（热点/VPN）或改用下方 Netlify。

## 第三步：开启 GitHub Pages

1. 打开仓库 → **Settings** → 左侧 **Pages**  
2. **Source** 选 **Deploy from a branch**  
3. **Branch** 选 `main`，文件夹选 **`/ (root)`**  
4. 保存后等待 1–3 分钟  

## 公开访问地址

你的作品集地址：

**https://dallasramireshx-a11y.github.io/lyjportfolio/**

> 若打开后没有样式，说明 `css/`、`js/`、`assets/` 未上传完整，请运行 **`补传缺失文件.bat`**。

---

### 想用根域名（可选）

新建仓库名必须为 **`dallasramireshx-a11y.github.io`**，推送后 Pages 地址为：

**https://dallasramireshx-a11y.github.io/**

---

### 推送失败时

- 单文件不能超过 100MB；若报错，检查 `assets` 里是否有超大 PDF  
- 可用 [Netlify Drop](https://app.netlify.com/drop) 拖拽整个文件夹，无需 Git
