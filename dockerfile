FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

WORKDIR /app

COPY . /app

RUN uv sync

EXPOSE 8000
CMD ["uv", "run", "gunicorn", "main:app", "--bind", "0.0.0.0:8000"]