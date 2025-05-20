# React + TypeScript + Vite

This is the main container application built with Vite + React. It consumes and renders two separately deployed micro frontends (MFEs) using Module Federation via @originjs/vite-plugin-federation.

It uses Module Federation to dynamically load and render React components from the two MFEs at runtime. Each MFE is independently deployed and versioned, enabling modular development and faster deployments.



🔗 Microfrontends Consumed
Microfrontend	Port	Description
investor-list-mfe	3001	Displays a table of investors
commitment-breakdown-mfe	3002	Shows a breakdown of investor commitments


Backend API
A .NET Core Web API provides the data consumed by both MFEs.

API Endpoints
Swagger UI: http://localhost:5288/swagger/index.html

Get all investors: http://localhost:5288/api/investors

Get commitments by investor ID:
http://localhost:5288/api/investors/1/commitments

Filter commitments by asset class:
http://localhost:5288/api/investors/1/commitments?assetClass=Hedge%20Funds


How to Run main app
Make sure all three apps are built and running before starting the container.

1. Start investor-list-mfe

cd ../investor-list-mfe
npm install
npm run build
npm run preview -- --port 3001
2. Start commitment-breakdown-mfe

cd ../commitment-breakdown-mfe
npm install
npm run build
npm run preview -- --port 3002
3. Start Main Container

cd main-container/react-ts
npm install
npm run build
npm run preview
Visit: http://localhost:4173