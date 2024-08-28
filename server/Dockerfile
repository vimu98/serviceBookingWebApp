# Use the OpenJDK 17 runtime with a slim image to reduce size
FROM openjdk:17-jdk-slim

# Declare a volume for the /tmp directory
VOLUME /tmp

# Set a build argument for the JAR file location (default: target/*.jar)
ARG JAR_FILE=target/*.jar

# Copy the JAR file into the container as app.jar
COPY ${JAR_FILE} app.jar

# Define the entrypoint to run the JAR file
ENTRYPOINT ["java", "-jar", "/app.jar"]
