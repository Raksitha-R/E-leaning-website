# Zenith - A smart E-Learning website

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Data Scraping
- Based on your chosen domain a road map will be generated with help of gemini-pro model.
- The road map topic is passed as a query to youtube data api.
- It fetches 10 videos for all the topics, among those 10 videos, the video with more like count will be appended with topic, url and transcript to the json file.

# Features
**Summary** - With the help of the generated transcript, summarization has been provided using gemini-pro.

**doubts**  - Considering the age and transcript as input to the gemini pro model making doubt clarification an enjoyable feature to the people of any age group.

**quiz**    - A quiz will be generated with the help of the transcripts and the user will be able to choose the answers and keep track of their scores.

