import streamlit as st
 
st.title(" FDP Final Day Final Project ")
age = st.slider("select your age:" , 1 , 100)
city = st.selectbox("choose your city :" ,["delhi", "mumbai", "bangalore", "chennai"])
 
if st.button("show details"):
    st.write("your age is :" , age)
    st.write("your city is :" , city)
    # Simple current-weather display per request:
    # If the selected city is Delhi -> show "Very cold", otherwise show "Cold"
    if city.strip().lower() == "delhi":
        weather = "Very cold"
    else:
        weather = "Cold"
    st.write("Current weather condition:", weather)