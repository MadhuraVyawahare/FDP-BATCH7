import streamlit as st
import google.generativeai as genai
 
genai.configure(api_key="AIzaSyAEJ2b9NR9g3eHbzGmC3weTzHMMhUqAwf8")
 
model = genai.GenerativeModel("models/gemini-2.5-flash")
 
st.title("simple chatbot")
 
user_input = st.text_input("you:",  placeholder="type your message")
 
if user_input:
    try:
        response = model.generate_content(user_input)
        st.write("gemini" , response.text)
    except Exception as e:
        st.error(f"Error:{e}")