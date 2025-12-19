import streamlit as st
st.title("simple calculator app")
num1 = st.number_input("Enter first number:")
num2 = st.number_input("Enter second number:")

operation = st.selectbox("Select operation:", ["Add", "Subtract", "Multiply", "Divide"])    

if st.button("Calculate"):
    if operation == "Add":
        st.write(num1 + num2)
    elif operation == "Subtract":
        st.write(num1 - num2)
    elif operation == "Multiply":
        st.write(num1 * num2)
    elif operation == "Divide":
        if num2 != 0:
            st.write(num1 / num2)
        else:
            result = "Error: Division by zero"
    