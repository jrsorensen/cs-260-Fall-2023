# Notes from 260
## Markdown notes
  I learned about the following
  + how to make lists
  + how to indent
  + that you can make links to other pages like **[my readMe page](/README.md)**
  + [MarkDown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#relative-links)
  + To ssh into my server I do this `ssh -i [key pair file] ubuntu@[ip address]` and to exit I `exit`

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

