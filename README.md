# Project Name

## Description
- This project is a full-stack web application similar to Airbnb with features like map encoding, image storing on the cloud, and MVC architecture. It includes frontend and backend with database validation.

## Features
- Map encoding
- Image storage on the cloud
- MVC architecture
- Frontend and backend with database validation

## Tech Stack
- **Frontend:** Embedded JS, BootStrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary
- **Other Tools:** MapBox

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/DhiravAgrawal/WanderLust.git
    cd wanderlust
    ```

2. **Install dependencies for both frontend and backend:**
    ```bash
    # Install backend dependencies
    npm install

3. **Setup environment variables:**
    - Create a `.env` file in the `backend` directory and add the following:
      ```
      CLOUD_NAME=your_cloud_storage_name
      CLOUD_API_KEY=your_cloud_storage_api_key
      CLOUD_API_SECRET=your_cloud_storage_api_key_secrect
      MAP_TOKEN=your_mapbox-token
      ATLASDB_URL=your-atlas-cluster_connection-url
      ```

4. **Run the application:**
    ```bash
    nodemon app.js
    ```


