# Nodeの安定版LTS（22系）
FROM node:22-slim

# 作業ディレクトリ
WORKDIR /myapp

# package.jsonを先にコピー（キャッシュ効率化）
COPY package*.json ./

# 依存関係インストール
RUN npm install

# ソースコードをコピー
COPY . .

# 開発サーバーのポート
EXPOSE 5173

# 開発サーバー起動コマンド
CMD ["npm", "run", "dev"]
