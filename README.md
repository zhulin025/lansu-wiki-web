# LanSu WikiView

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <strong>将任何 GitHub Wiki 仓库转化为精美、可视化的深度阅读体验。</strong>
</p>

<p align="center">
  输入 GitHub 仓库 URL &rarr; 瞬间呈现包含知识图谱、全文检索和增强型导航的高端 Wiki 阅读器。
</p>

---

## 功能特性

- **通用 GitHub 支持** — 适用于任何包含 Markdown 文件的公开 GitHub 仓库。
- **知识图谱** — 基于 D3.js 的交互式力导向图，将页面之间的关联可视化展现。
- **全文检索** — 使用 `Cmd+K` 瞬间搜索所有页面标题、标签和正文内容。
- **Mermaid 图表** — 自动将 `mermaid` 代码块渲染为交互式图表。
- **ASCII 图表检测** — 自动检测 ASCII 艺术流程图/架构图并赋予特殊的精致样式。
- **Frontmatter 徽章** — 将 YAML Frontmatter 中的类别、日期和标签显示为彩色微型徽章。
- **Wiki 链接导航** — `[[双括号]]` 内部链接可点击，并在阅读器中流畅跳转。
- **目录大纲 (TOC)** — 右侧自动生成目录，支持滚动位置实时跟踪高亮。
- **阅读进度** — 顶部渐变进度条实时跟踪页面滚动位置。
- **响应式设计** — 移动端优先，配备可折叠的侧边栏抽屉。
- **相对路径解析** — 无论仓库目录结构如何，图片和内部链接均能正确解析并加载。

## 快速开始

```bash
# 克隆项目
git clone https://github.com/zhulin025/lansu-wiki-web.git
cd lansu-wiki-web

# 安装依赖
pnpm install

# 运行开发服务器
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 并输入任何 GitHub 仓库地址。

## 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zhulin025/lansu-wiki-web)

零配置一键部署。可选择添加 `GITHUB_TOKEN` 环境变量以提高 GitHub API 速率限制。

## 技术栈

| 层级 | 技术 / 库 |
|-------|-----------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4 |
| Markdown 解析 | react-markdown + remark-gfm + rehype-highlight |
| 图表与可视化 | Mermaid 11 + D3.js 7 |
| 图标 | Lucide React |
| 部署方式 | Vercel |

## 项目结构

```
src/
  app/
    page.tsx                    # 包含 URL 输入的落地页
    api/wiki/route.ts           # GitHub API 代理接口
    wiki/[owner]/[repo]/page.tsx # Wiki 阅读器主页面
  components/
    Sidebar.tsx                 # 侧边栏分类导航
    MarkdownContent.tsx         # Markdown 渲染器 + 图表智能检测
    MermaidBlock.tsx             # Mermaid 图表渲染组件
    TableOfContents.tsx         # 滚动跟踪目录组件
    KnowledgeGraph.tsx          # D3 力导向知识图谱组件
    SearchDialog.tsx            # 全文检索模态框
  lib/
    github.ts                   # GitHub API 封装与 Wiki 数据构建器
```

## 支持的仓库格式

开箱即用支持以下内容：

- Wiki 风格的知识库（如 Obsidian、GitBook 等）
- Awesome 优质列表（如 awesome-python、awesome-go 等）
- 文档技术库（如 system-design-primer 等）
- 任何包含 `.md` 文件且具有任意目录结构的仓库

## 开源协议

MIT
