import streamlit as st
 
st.title("simple chatbot")
 
 
question = st.text_input("Ask me anything")
 
 
if st.button("send"):
    st.write("you asked", question)
    st.write("chatbot reply i am still learning ")