# 1. Use OpenJDK 17 base image
FROM eclipse-temurin:17-jdk-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy the built JAR file into the container
COPY target/*.jar app.jar

# 4. Expose the port your Spring Boot app runs on
EXPOSE 8080

# 5. Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
