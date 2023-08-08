FROM openjdk:17
EXPOSE 8080
ADD target/democicdpipeline.jar democicdpipeline.jar
ENTRYPOINT ["java","-jar","/democicdpipeline.jar"]
