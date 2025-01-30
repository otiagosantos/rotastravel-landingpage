FROM ubuntu:latest

RUN apt-get update -y && apt-get install -y \
    apache2 \
    php \
    libapache2-mod-php \

RUN a2enmod rewrite

WORKDIR /var/www/html

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]

# docker build . --tag rotastravel-landingpage-image -v ./:/var/www/html -p 8000:80

# docker run -d --name rotastravel-landingpage-container 
