FROM gradle:jdk21-jammy
WORKDIR /build
COPY libs/ build.gradle settings.gradle ./
RUN gradle dependencies 
COPY . .
RUN gradle check --warning-mode all
