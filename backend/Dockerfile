FROM python:3.10-slim
ENV PYTHONBUFFERED=1

RUN apt-get update && apt-get install -y \
    locales
RUN dpkg-reconfigure locales

RUN pip install poetry

WORKDIR /app/backend

COPY . /app/backend

RUN poetry install
