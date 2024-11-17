# SQU Admission Chatbot

A modern chatbot interface powered by LLaMA 2 that helps users with Sultan Qaboos University admission inquiries.

## Overview

SQU Admission Chatbot is an AI-powered assistant that provides instant responses to questions about admission requirements, procedures, and general information about Sultan Qaboos University using Meta's LLaMA 2 language model. The chatbot processes university admission documents to provide accurate and contextual responses.

## ✨ Features

- Real-time conversational interface
- LLaMA 2-powered AI responses
- PDF-based knowledge processing
- Modern, responsive UI design
- Interactive chat elements
- Real-time typing indicators
- Message history tracking
- Error handling & recovery

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Lucide Icons

**Backend**
- Flask
- LangChain
- Meta's LLaMA 2 (7B parameters)
- FAISS Vector Store
- LangChain PDF Loader

## 🚀 Setup

**Frontend**
Install dependencies and start development server:
Install dependencies
npm install
Start development server
npm start
Copy
**Backend**
Install Python dependencies and run Flask server:
Install Python dependencies
pip install -r requirements.txt
Set up Hugging Face token for LLaMA 2
Request access: https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
Run Flask server
python app.py
Copy
## 📁 Project Structure
squ-chatbot/
├── src/
│   ├── components/
│   │   └── SQUChatbot.jsx    # Main chatbot component
│   ├── App.js                # Root component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
└── public/
└── index.html            # HTML template
Copy
## ⚡ Requirements

- Node.js 14+
- Python 3.8+
- Hugging Face account with LLaMA 2 access
- Minimum 16GB RAM recommended
- PDF documents for knowledge base

## 👤 Contact

Ayah Al-Shanfari - [@AyahTech](https://github.com/AyahTech)

---
<p align="center">Made with ❤️ for Sultan Qaboos University</p> 
