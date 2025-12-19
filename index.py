import streamlit as st
import google.generativeai as genai
 
st.title("final fdp session today")
 
user_input = st.text_input("ask me anything ")
 
model = genai.GenerativeModel("models/gemini-2.5-flash")
 
model = genai.GenerativeModel("models/gemini-2.5-flash")
 
if user_input:
    response = model.generate_content(user_input)
    st.write("response from genai")
    st.write(response.text)