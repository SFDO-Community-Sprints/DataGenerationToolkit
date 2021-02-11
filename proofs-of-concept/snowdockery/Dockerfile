FROM python:3.8

## Environment Setup
ENV PYTHONUNBUFFERED=1
EXPOSE 8888

## Add SFDX
COPY ./setup/install_sfdx.sh /app/setup/install_sfdx.sh
RUN chmod +x /app/setup/install_sfdx.sh
RUN /app/setup/install_sfdx.sh

## Add needed Python libraries and tools.
RUN pip install --no-cache --upgrade pip
RUN pip install Flask
RUN pip install pipx

## Add cumulusci and snowfakery.
RUN pipx install cumulusci
RUN pipx install snowfakery
RUN pipx ensurepath

## Add the web server we'll be using.
COPY ./src/server/* /var/opt/bin

## Copy over the interface app.
COPY ./src/app/* /srv/http

## Start the server
CMD ["python", "/var/opt/bin/local_server.py"]
