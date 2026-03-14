FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

WORKDIR /app

COPY . /app

RUN uv sync

ENV PYTHONUNBUFFERED=1
EXPOSE 5000
CMD ["/app/.venv/bin/gunicorn", "main:app", "--bind", "0.0.0.0:5000"]