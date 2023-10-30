# Notes from 260
## Markdown notes
  I learned about the following
  + how to make lists
  + how to indent
  + that you can make links to other pages like **[my readMe page](/README.md)**
  + [MarkDown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#relative-links)
  + To ssh into my server I do this `ssh -i [key pair file] ubuntu@[ip address]` and to exit I `exit`
  + To deploy something to my server I run the following within it's folder `./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon`
  + To add an image `<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />` the alt is the text that will display if the image doesn't load
    + You can also use a relative path to a file like `images/photo.jpg`
  + To do audio you use `<audio controls src="testAudio.mp3"></audio>` 

# Internet
## Making connections
Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.
Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. This is done dynamically. You can determine the hops in a connection using the traceroute console utility. If I run traceroute again I might see a slightly different route since every connection through the internet is dynamically calculated. The ability to discover a route makes the internet resilient when network devices fail or disappear from the network.

## Network internals
The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.

# Web servers
A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

## Web service gateways
Each service, when it starts up, is given a specific port to run on. We need an easy way of connecting to the right port for the right service. It would be combersum to keep track of all of that so we have gateways or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTPS port 443. The gateway then looks at the request and maps it to the other services running on a different ports.

## Microservices 
  + Provide a single function
  + Are easy to work on because they can be developed and changed independently of other program functionality
  + Are easily scalable

## Serverless
The idea of microservices naturally evolved into the world of serverless functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.

# Domain names
+ Just a way of having human friendly IP addresses
+ One domain name can have multiple IP addresses for redundancy
+ They are listed ina  special database called the domain name registry
+ There are two parts to a domain name
   + Root
     + represented by a secondary level domain and a top level domain.
       + Top level domain (TLD) represents thing like come, edu, click, net.
       + The possible lists of these is controlled by ICANN, an internet governing board
  + Subdomains
    + May resolve to different IP addresses.
+ Get info about domain names using the `whois` command ie `whois byu.edu`

## DNS
The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

The time to live (TTL)
+ You can set this to be something short like 5 minutes or as long as several days.
+ The different caching layers should then honor the TTL and clear their cache after the requested period has passed.
+ 

# The Console
## Executing commands

The other primary purpose of the console is to execute commands. You already did this in the previous section when you executed commands for working with the file system. However, console commands can perform many different operations. Here are some basic commands that you show experiment with.

- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

You can also chain the input and output of commands using special characters

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into `grep` to search for files created in Nov, and then pipe that into `wc` to count the number of files found with a date of Nov.

```
ls -l | grep ' Nov ' | wc -l
```

There are also keystrokes that have special meaning in the console.

- `CTRL-R` - Use type ahead to find previous commands
- `CTRL-C` - Kill the currently running command

# HTML
## Examples
```html
<p id="hello" class="greeting">Hello world</p>
```
```html
<a href="https://byu.edu">Go to the Y</a>
```
```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>
```

You can include comments in your HTML files by starting the comment with `<!--` and ending it with `-->`. Any text withing a comment block will be completely ignored when the browser renders it.

```html
<!-- commented text -->
```

## index.html

By default a web server will display the HTML file named `index.html` when a web browser, such as Google Chrome, makes a request without asking for a specific HTML file. For example, when you ask for `https://google.com` in your web browser you will actually get back the HTML for the file `https://google.com/index.html`. For this reason, it is very common to name the main HTML file for your web application `index.html`.

## HTML media
To include an audio file in your content you use the audio element and specify the src attribute with the URL to the source audio file. You can include the controls attribute if you want the user to be able to control the audio playback. If you do not display the controls then there is no visual representation of the audio in the rendered page. The autoplay attribute starts the audio playing as soon as the audio file is loaded, and the loop attribute keeps it playing over and over. `<audio controls src="testAudio.mp3"></audio>`

To include a video in your content you use the video element and specify the src attribute with the URL to the source video. Like the audio element you can include the controls or autoplay attributes.
⚠ Note that you may need to include the crossorigin="anonymous" attribute if you are requesting files from a different domain than the one serving your content. 
```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

# CSS
Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.

## Associating CSS with HTML

There are three ways that you can associate CSS with HTML. The first way is to use the `style` attribute of an HTML element and explicitly assign one or more declarations.

```html
<p style="color:green">CSS</p>
```

The next way to associate CSS is to use the HTML `style` element to define CSS rules within the HTML document. The `style` element should appear in the `head` element of the document so that the rules apply to all elements of the document.

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```

The final way to associate CSS is to use the HTML `link` element to create a hyperlink reference to an external file containing CSS rules. The `link` element must appear in the `head` element of the document.

```html
<link rel="stylesheet" href="styles.css" />
```

**styles.css**

```css
p {
  color: green;
}
```

All of the above examples are equivalent, but using the `link` element usually is the preferred way to define CSS. If multiple are applied to a single element the one sytactically closest to the element will be applied. 

## The box model

CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace. It is important to understand each of these boxes so that you can achieve the desired visual result by applying the proper CSS declaration.

## CSS Selectors
**[CSS selectors examples](https://github.com/webprogramming260/.github/blob/main/profile/css/selectors/selectors.md)**

## CSS Declarations and Units
**[CSS declarations examples](https://github.com/webprogramming260/.github/blob/main/profile/css/declarations/declarations.md)**

# Notes for Midterm

### References to other helpful notes
- [MarkDown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#relative-links)
- [The Console](https://github.com/webprogramming260/.github/blob/main/profile/essentials/console/console.md)
- [HTTPS, TLS, and web certificates](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md)

### HTML
- [Hypertext Markup Language](https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md)
- [HTML structure elements](https://github.com/webprogramming260/.github/blob/main/profile/html/structure/structure.md)
- [HTML input elements](https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md)
- [HTML media elements](https://github.com/webprogramming260/.github/blob/main/profile/html/media/media.md)
  
### CSS
- [Cascading Style Sheets](https://github.com/webprogramming260/.github/blob/main/profile/css/introduction/introduction.md)
- [CSS Selectors](https://github.com/webprogramming260/.github/blob/main/profile/css/selectors/selectors.md)
- [CSS Declarations](https://github.com/webprogramming260/.github/blob/main/profile/css/declarations/declarations.md)
- [CSS Fonts](https://github.com/webprogramming260/.github/blob/main/profile/css/fonts/fonts.md)
- [CSS Animation](https://github.com/webprogramming260/.github/blob/main/profile/css/animation/animation.md)
- [Responsive design](https://github.com/webprogramming260/.github/blob/main/profile/css/responsive/responsive.md)
- [Grid](https://github.com/webprogramming260/.github/blob/main/profile/css/grid/grid.md)
- [CSS flex](https://github.com/webprogramming260/.github/blob/main/profile/css/flexbox/flexbox.md)

### JavaScript
- [JavaScript arrow function](https://github.com/webprogramming260/.github/blob/main/profile/javascript/arrow/arrow.md)
- [JavaScript array](https://github.com/webprogramming260/.github/blob/main/profile/javascript/array/array.md)
- [JavaScript rest and spread](https://github.com/webprogramming260/.github/blob/main/profile/javascript/restSpread/restSpread.md)
- [JavaScript destructuring](https://github.com/webprogramming260/.github/blob/main/profile/javascript/destructuring/destructuring.md)
- [JavaScript object and classes](https://github.com/webprogramming260/.github/blob/main/profile/javascript/objectClasses/objectClasses.md)
- [Document Object Model](https://github.com/webprogramming260/.github/blob/main/profile/javascript/dom/dom.md)
- [Promises](https://github.com/webprogramming260/.github/blob/main/profile/javascript/promises/promises.md)
- [JavaScript Async/await](https://github.com/webprogramming260/.github/blob/main/profile/javascript/asyncAwait/asyncAwait.md)

# Midterm Study Guide
1. In the following code, what does the link element do?
  - Link elements can be used to connect HTML to files containing CSS or JavaScript.
2. In the following code, what does a div tag do?
  - a div tag is a block division of content
3. In the following code, what is the difference between the #title and .grid selector?
  - an [ID selector](#ID-selector) is when you select something in CSS by the unique id of that object, using the hash symbol '#' to reference it. A [class selector](#Class-selector) references a class of one or many objects using a period '.' to select it.
4. In the following code, what is the difference between padding and margin?
  - Take a look at [the box model](#The-box-model).  
5. Given this HTML and this CSS how will the images be displayed using flex?
  - Take a look at [CSS Flexbox](#CSS-Flexbox) and [Display](#Display).
6. What does the following padding CSS do?
  - Take a look at [the box model](#The-box-model).  
7. What does the following code using arrow syntax function declaration do?
  - Take a look at [JavaScript arrow functions](#JavaScript-arrow-function).
8. What does the following code using map with an array output?
  - Take a look at [Array Object functions](#Array-Object-Functions).
9. What does the following code output using getElementByID and addEventListener?
  - Take a look at [Accessing the DOM](#Accessing-the-DOM).
10. What does the following line of Javascript do using a # selector?
    - The # selector is the id selector.
11. Which of the following are true? (mark all that are true about the DOM)
    - Every element in an HTML document implements teh DOM element interace wheich is deri ed from the DOM notde interface. The former provides the means for iterating child elements, accessing the parent element, and manipulating the elements. You can use querySelectorAll to select things. You can access all of an element's text with the `textContent` and all of the HTML witht he `innerHTML` property. 
12. By default, the HTML span element has a default CSS display property value of:
  - Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default.
13. How would you use CSS to change all the div elements to have a background color of red?
    ```div {
  color: red;
}```
14. How would you display an image with a hyperlink in HTML?
  - To add an image `<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />`
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    - Content, Padding, Border, Margin
16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
17. What will the following code output when executed using a for loop and console.log?
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
  - ``` #byu { color: green; } ```
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, and third level heading?
    - "<p></p>,<ol></ol>,<ul></ul>,<h2></h2>,<h1></h1>,<h3>></h3>"
20. How do you declare the document type to be html?
  - `<! DOCTYPE html>`
21. What is valid JavaScript syntax for if, else, for, while, switch statements?
    - ```if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
      switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
   for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}  while (condition) {
  // code block to be executed
} ```
22. What is the correct syntax for creating a JavaScript object?
  - `const car = {type:"Fiat", model:"500", color:"white"};`
23. Is it possible to add new properties to JavaScript objects?
  - Yes
24. If you want to include JavaScript on an HTML page, which tag do you use?
  - In HTML, JavaScript code is inserted between <script> and </script> tags.
25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    - `let text = "Visit Microsoft!"; let result = text.replace(/microsoft/i, "W3Schools");`
26. Which of the following correctly describes JSON?
  - "a standard text-based format for representing structured data based on JavaScript object syntax"
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
28. Which of the following console command creates a remote shell session?
  - ssh
29. Which of the following is true when the -la parameter is specified for the ls console command?
  - it will list all files and directories in the current directory, including hidden files and directories, in a long format with detailed information about each item.
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top-level domain, which is a subdomain, which is a root domain?
  - top-level domain: .click, root domain: bozo.click, subdomains: .banana, .fruit
31. Is a web certificate necessary to use HTTPS?
  - Yes
32. Can a DNS A record point to an IP address or another A record?
  - an IP address
33. Port 443, 80, 22 is reserved for which protocol?
  - 443: HTTPS Protocol, 80: HTTP Protocol, 22: SSH
34. What will the following code using Promises output when executed?

