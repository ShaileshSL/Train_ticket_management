# Start Eureka Server
Start-Process powershell -ArgumentList "cd project\eureka_server\eureka_server; .\mvnw.cmd spring-boot:run" -NoNewWindow

# Wait a few seconds to let Eureka start
Start-Sleep -Seconds 8

# Start API Gateway
Start-Process powershell -ArgumentList "cd project\api_gateway\api_gateway; .\mvnw.cmd spring-boot:run" -NoNewWindow

# Start User Service
Start-Process powershell -ArgumentList "cd project\user_service\user_service; .\mvnw.cmd spring-boot:run" -NoNewWindow

# Start Booking Service
Start-Process powershell -ArgumentList "cd project\booking-service\booking-service; .\mvnw.cmd spring-boot:run" -NoNewWindow

# Start Train Service
Start-Process powershell -ArgumentList "cd project\train_service\train_service; .\mvnw.cmd spring-boot:run" -NoNewWindow

# Start Admin Train Service
Start-Process powershell -ArgumentList "cd project\admin-train-service\admin-train-service; .\mvnw.cmd spring-boot:run" -NoNewWindow 