# 发布作品集 · 获取公开链接

项目约 **260MB**（含 PDF / 视频），请用支持大文件的静态托管。

## 方式一：Netlify 拖拽部署（推荐，最简单）

1. 打开 https://app.netlify.com/drop  
2. 登录 / 注册（可用 GitHub 邮箱）  
3. 将整个 `test1cursor` 文件夹拖到页面  
4. 等待上传完成，会得到类似 `https://随机名.netlify.app` 的链接  
5. 在 Netlify 后台可改名为自定义子域名  

## 方式二：Cloudflare Pages

1. 打开 https://dash.cloudflare.com → Pages → Create project  
2. 选择 **Direct Upload**，上传整个项目文件夹  
3. 部署完成后获得 `https://xxx.pages.dev`  

## 方式三：GitHub Pages（需 GitHub 账号）

```powershell
cd C:\Users\l2090\Desktop\test1cursor
git init
git add .
git commit -m "Portfolio: Lu Yujing"
gh repo create luyujing-portfolio --public --source=. --push
gh api repos/{owner}/luyujing-portfolio/pages -f source[branch]=main -f source[path]=/
```

在仓库 **Settings → Pages** 中启用后，访问：  
`https://你的用户名.github.io/luyujing-portfolio/`

> 若推送因单文件过大失败，可先把 `assets` 里最大的 PDF 再压缩，或使用 Git LFS。

## 本地预览

- 双击 `预览网站.bat` 打开首页（部分浏览器下 PDF/视频需本地服务器）  
- 或在 VS Code / Cursor 安装 **Live Server**，右键 `index.html` → Open with Live Server  

## 文件位置

所有作品已保存在：`C:\Users\l2090\Desktop\test1cursor`
