# LukeChurch GitHub Pages Demo 說明

這個專案目前已可直接拿來做 GitHub Pages 示意展示。

## Demo 目的

- 對上報告時展示官網首頁形象
- 展示本週固定入口 `/weekly/`
- 展示歷史週報頁 `/bulletins/2026-03-22.html`
- 作為正式切換 Cloudflare Pages 前的暫時展示站

## 建議 Demo 結構

- `/`：首頁
- `/weekly/`：本週週報入口
- `/bulletins/`：歷史週報索引
- `/bulletins/2026-03-22.html`：單篇歷史週報頁

## GitHub Pages 使用方式

1. 建立 GitHub repository
2. 將目前專案推上去
3. 在 GitHub `Settings > Pages` 啟用 Pages
4. Branch 選 `main`，資料夾選 root
5. 稍候即可取得 GitHub Pages 網址

## 正式環境建議

GitHub Pages 只作 demo 與報告用途。
正式站仍建議使用：

- `Cloudflare Pages + Git integration`

原因：
- 後續較容易接正式網域
- 可擴充 Functions
- 比較適合官網正式使用
