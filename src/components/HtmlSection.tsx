import React from 'react';

const HtmlSection: React.FC = () => (
  <div
    className="bg-black/50 border border-gray-700 p-4 rounded overflow-y-auto text-white"
    style={{ maxHeight: '400px', maxWidth: '800px' }}
  >
    <div className="mb-4 text-gray-200">
      <p>
        HTML is the language that defines the structure and content of web pages. It is the backbone of
        the site and is what the browsers interpret to show content to the user. It uses tags for various
        elements to differentiate between things like headings, paragraphs, images, links. You can
        specify bolding, italics, or what level of heading. It interacts with CSS for styling. By differentiating
        components, it makes it easier to parse a website for information, allowing accessibility.
      </p>
    </div>
    <pre className="text-sm text-gray-100">
      <code className="text-white">{`<!DOCTYPE html>
    
  <head>
    <title>La Cage</title>
    <link rel="stylesheet" href="cagestyle.css" />
  </head>
  <div class = "banner"
>        <img src="https://tse1.mm.bing.net/th?id=OIP.oUZKr2wl149eIJ4poCkJxAHaHa&rs=1&pid=ImgDetMain" height=50> 
        <span style="font-size: 3em"> <i>&nbsp;La Cage &nbsp; </i>  </span> 
        <img src="https://tse1.mm.bing.net/th?id=OIP.oUZKr2wl149eIJ4poCkJxAHaHa&rs=1&pid=ImgDetMain" height=50> 
    </div>
  <body>
        
    
    
    <div class="menu">
      <a href="cagewebsite.html">Home</a>
      <a href="aboutcage.html">About</a>
      <a href="contacts.html">Contact</a>
    </div>
    <div class = "image-section"    >
      <img src="https://th.bing.com/th/id/OIP.Z5pe5GVs5VAeLN_c08oUHAHaEo?w=300&h=187&c=7&r=0&o=5&pid=1.7">
      <img src="https://tse3.mm.bing.net/th?id=OIP.db8RhAWibnt8yI31OK5dawHaEJ&rs=1&pid=ImgDetMain">
      <img src="https://cdn-az.allevents.in/events7/banners/d556701cebff6c7ca1b4a5223ab839ee986310af7e03e3e1866b1e21f7bb73ed-rimg-w1200-h722-dc171618-gmir?v=1718379277">
  </div>


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
    <div class="content-section">
    <h3> Welcome to <i>La Cage</i> </h3>
    <br>
    <p> <i>La Cage</i> is a local bar in Lewiston, Maine. We offer a variety of activities and drinks for you to enjoy. </p>
    <br>
    <h4> What does <i>La Cage</i> have to offer? </h4>
    <br>
    <div class="flex-container">
      <ul>
        <li>Great company</li>
        <li>Pool table</li>
        <li>Karaoke</li>
        <li>Foosball</li>
        <li>Darts</li>
        <li><s>Clean Floors</s></li>
        <li><b>Pabst Blue Ribbon</b></li>
      </ul>

      <div class="images">
        <img src="https://th.bing.com/th/id/OIP.KOdbpCZ-ydZhggCkWZ_aBAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7" class="bouncing-image">
        <img src="https://th.bing.com/th/id/OIP.qnFCQe9JM-XOZ4S3Pz44xwHaI5?w=155&h=186&c=7&r=0&o=5&pid=1.7" class="bouncing-image">
        <img src="https://vivregourmet.com/wp-content/uploads/2020/07/52.png" class="bouncing-image">
        <img src="https://th.bing.com/th/id/OIP.IVOGsACZCVL6pX-1K_N29QAAAA?rs=1&pid=ImgDetMain" class="bouncing-image">
        <img src="https://th.bing.com/th/id/R.38f536b79c7c40bfee9aecdebb7b107e?rik=vt3aSVtpOZCJtA&pid=ImgRaw&r=0&sres=1&sresct=1" class="bouncing-image">
      </div>
    </div>
    </div>
    <br/>
    <div class = "content-section">

     Follow on <a href="https://www.facebook.com/people/The-Cage/100054271431513/"> Facebook</a> 
     <br>
     <br>
     Write a review on our   <a href="https://www.tripadvisor.com/Attraction_Review-g40708-d5831786-Reviews-The_Cage-Lewiston_Maine.html"> Trip Advisor</a> 
    </div>  

  </body>
</html>
`}</code>
    </pre>
  </div>
);

export default HtmlSection;
