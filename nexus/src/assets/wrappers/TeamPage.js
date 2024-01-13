import styled from 'styled-components'

export const Wrapper = styled.section`
*{
    margin:0;
    padding: 0;
    background-color: black;
}
body{
    height: 100vh;
    background-color:black;
}
.main{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
}
.head1{
    height:30%;
    padding:10px;
}
.h1{
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
}
.team1{
    width:120%;
    padding: 15px;
    display: flex;
    align-items: margin-top;
    justify-content: space-around;
}
/* .container{
   position: relative;
   
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
} */
.card{
    width: 300px;
    height: 205px;
    display: flex;
    flex-direction:column;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    background: rgba(255, 255, 255, 0.1);
   backface-visibility: hidden;
}
.image{
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 5px;;
    background-color:black;
}
.image .profile-img{
    height: 100%;
    width:100%;
    object-fit: cover;
    border-radius: 50%;
} 
.front .text{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;

}
.text .name{
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    /* margin-left: 35px; */
}
.icon{
    width:95%;
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
}

`