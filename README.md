以下是将该教程内容转换为 Markdown 格式的文档：

# MCP 教程：将 Figma 设计稿转化为前端代码

还在手动从设计稿提取样式、编写基础代码？试试 Trae IDE 的模型上下文协议（MCP）功能吧。通过使用 MCP Server - Figma AI Bridge，自动将你的 Figma 设计稿转换为整洁的前端代码，并生成相应的网页。简单高效，无需复杂配置，跟随文中的步骤操作，即可体验智能化的设计交付。让我们开始吧！

![img](https://p9-arcosite.byteimg.com/https://p9-arcosite.byteimg.com/obj/tos-cn-i-goo7wpa0wc/5fdbb1bf196049f28d57689d35a3efdf~tplv-goo7wpa0wc-quality:q75.image)

## 环境准备

- Trae IDE 版本：0.5.5
- macOS 版本：14.7
- Node.js 版本：20.19.1
- npx 版本：10.9.2
- Python 版本：3.13.3
- uvx 版本：0.6.16

## 第一步：安装 Trae IDE

Trae IDE 与 AI 深度集成，提供智能问答、代码自动补全以及基于 Agent 的 AI 自动编程能力。使用 Trae 开发项目时，你可以与 AI 灵活协作，提升开发效率。前往 Trae CN 官网，下载 Trae IDE 的安装包，然后将其安装至你的计算机。

## 第二步：安装依赖

为确保正常启动 MCP Server，你需要安装以下依赖：

- npx：依赖于 Node.js，版本需大于等于 18。
- uvx：命令行工具，用于快速运行 Python 脚本。

### 安装 Python 及 uvx

1. 前往 Python 官网，下载并安装 Python 3.8 或更高版本。
2. 安装完成后，在终端中执行以下命令确认是否安装成功：

   ```bash
   python --version
   ```

   若安装成功，终端中会输出已安装的 Python 的版本号。

3. 执行以下命令，安装 uv（包含 uvx）：

   - macOS / Linux 安装命令：

     ```bash
     curl -LsSf https://astral.sh/uv/install.sh | sh
     ```

   - Windows 安装命令（PowerShell）：

     ```bash
     powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
     ```

4. 执行以下命令，加载 uvx 所需的运行时环境变量和初始化配置：

   ```bash
   source $HOME/.local/bin/env
   ```

5. 执行以下命令，验证是否安装成功：

   ```bash
   uvx --version
   ```

   若安装成功，终端中会输出已安装的 uvx 的版本号。

### 安装 Node.js

1. 前往 Node.js 官网，下载并安装 Node.js 18 或更高版本。
2. 安装完成后，在终端中运行以下命令确认是否安装成功：

   ```bash
   node --version
   ```

   若安装成功，终端中会输出已安装的 Node.js 的版本号，例如：

3. 重启 Trae IDE 以使 Node.js 生效。

## 第三步：获取 Figma 的 Access Token

配置 Figma AI Bridge 时，需要填入你的 Figma Personal Acccess Token。你可以在 Figma 安全设置中心获取它。步骤如下：

1. 点击页面左上角的用户头像，然后在菜单中选择 Settings。
2. 在窗口的顶部菜单中，选择 Security。
3. 移动至 Personal access tokens 部分，然后点击 Generate new token 按钮。
4. 界面上显示 Generate new token 弹窗。
5. 配置你的 Figma Personal Access Token：
   - 输入 Token 的名称。
   - 设置 Token 的有效期。
   - 配置 Token 的权限。直接复用下表中的配置：
     - 权限配置表格（此处需根据原文表格内容补充）
6. 点击窗口底部的 Generate token 按钮。

Figma Personal Access Token 已生成，你会在后续配置 MCP Server - Figma AI Bridge 时用到它。

## 第四步：添加 MCP Server - Figma AI Bridge

1. 打开 Trae IDE。
2. 在 AI 对话框的右上角，点击 设置 图标，然后在菜单中选择 MCP。
3. 界面上显示 MCP 页签。
4. 在 MCP 页签中，点击 \+ 添加 MCP Servers 按钮。若你已添加过 MCP Server，则点击右侧区域的 \+ 添加 按钮。
5. 找到 Figma AI Bridge，然后点击右侧的 + 按钮。
6. 界面上显示 添加 MCP Server 弹窗。
7. 在 Figma 页面上复制先前创建的 Figma Personal Access Token，然后粘贴至输入框中。
8. 点击底部的 确认 按钮。

MCP Server - Fimga AI Bridge 配置完成，并已自动添加至内置智能体 - Builder with MCP。

你可以直接使用 Builder with MCP 来体验 Figma AI Bridge（参考“第六步”）。若你希望创建一个自定义智能体，通过配置提示词和工具来使其更好地处理你的需求，请继续往下操作。

## 第五步：创建自定义智能体并为其配置 Figma AI Bridge

智能体（Agent）是你面向不同开发场景的编程助手。你可以创建自定义智能体，通过灵活配置提示词和工具集，使其更高效地帮你完成复杂任务。

1. 在 AI 对话框的右上角，点击 设置 图标，然后在菜单中选择 智能体。
2. 界面上显示 智能体 页签。
3. 点击右侧区域的 \+ 创建智能体 按钮。
4. 智能体配置面板已打开。
5. 配置该智能体：
   - (可选) 上传智能体的头像。
   - 输入智能体的名称（例如：Figma 助手）。
   - (可选) 配置智能体的提示词。参考提示词如下，你可以直接使用或根据需求制订提示词：

     ```plaintext
     根据用户提供的 Figma 链接，精准还原 UI 设计，生成响应式的 HTML 格式的前端页面代码。代码结构清晰，视觉细节与设计稿高度一致。禁止擅自修改设计内容，确保忠实还原。
     ```

   - 在 工具-MCP 部分，仅勾选 Figma AI Bridge。
   - 在 工具-内置 部分，勾选 文件系统（File System）、终端（Terminal）、联网搜索（Web Search）、预览（预览）。三个内置工具的作用如下：
     - 文件系统：对文件进行增删改查。
     - 终端：在终端运行命令，并获取命令的运行状态和结果。
     - 联网搜索：搜索和用户任务相关的网页内容。
     - 预览：在生成可预览的前端结果后提供预览入口。
6. 配置完成后的面板如下：（此处可补充原文中的面板截图说明）
7. 点击底部的 创建 按钮。

配置了 Figma AI Bridge 的智能体创建成功。你可以点击 立即使用 按钮，开启与智能体的对话。

## 第六步：使用智能体生成前端代码

1. 在上一环节中，点击 立即使用 按钮后，Trae IDE 会将你引导至 AI 对话框，并默认选用 Figma 助手 智能体（若未创建自定义智能体，则使用 Builder with MCP）。你可以与该智能体对话，输入 Figma 设计稿的地址，然后描述你的需求，让智能体创建相应的前端页面。
2. 请确保配置 Access Token 的账号拥有设计稿的访问权限。
3. 在本地新建一个文件夹，然后在 Trae IDE 中打开它。
4. 在 AI 对话输入框右下角，选择你想使用的模型（本教程使用 DeepSeek-V3- 0324）。
5. 前往 Figma 设计稿页面，选中设计稿并右击，然后在菜单中选择 Copy/Paste as > Copy link to selection。
6. 已复制该设计稿的链接。
7. 在 AI 对话输入框中，粘贴所复制的设计稿的链接。
8. 在设计稿链接的标签后输入你的需求并发送。例如：“请严格按照我提供的 Figma 链接内容生成 HTML 前端页面。UI 要严格还原设计稿，需要实现响应式设计”。
9. 智能体开始调用 Figma AI Bridge 中的工具和服务，读取设计稿的内容，自动生成文件，填入前端代码，并生成一个 index.html 文件供你预览效果。以下输出过程供参考：（此处可补充原文中的输出过程说明）
10. 智能体完成输出后，双击文件夹中的 index.html 文件，在浏览器中预览效果。
11. 持续与智能体对话，优化前端页面，直至达到让你满意的效果。
