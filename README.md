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

### 🌐 Frontend Setup
```bash
# Clone the repository
git clone https://github.com/AyahTech/squ-admission-bot.git

# Navigate to project directory
cd squ-admission-bot

# Install dependencies
npm install

# Start development server
npm start

# Application will run on http://localhost:3000
```
### 🛠️ Backend Setup
```bash
# Install required Python packages
pip install flask flask-cors torch transformers langchain langchain-community faiss-cpu

# Install additional dependencies
pip install accelerate bitsandbytes

# Set up Hugging Face
# 1. Create account at https://huggingface.co
# 2. Request LLaMA 2 access at: https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
# 3. Get token from: https://huggingface.co/settings/tokens

# Login to Hugging Face (when prompted, enter your token)
huggingface-cli login

# Place your PDF files in project directory
# Example: admission.pdf

# Run Flask server
python app.py

# API will be available at http://localhost:5000/api/chat
```
## 📁 Project Structure

### 🔑 Environment Setup

#### Prerequisites
```bash
# Required Software
Node.js 14+
Python 3.8+
npm or yarn
Git

```text
squ-chatbot/
├── src/
│   ├── components/
│   │   └── SQUChatbot.jsx      # Main chatbot component
│   ├── App.js                  # Root application component
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles & Tailwind
├── public/
│   ├── index.html              # HTML entry point
│   └── logo.png                # SQU logo asset
├── package.json                # Project dependencies
└── README.md                   # Project documentation         
```
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
