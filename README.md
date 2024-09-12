## 1. Chain of events caused by opening the page:

     https://studies.cs.helsinki.fi/exampleapp/notes

![alt text](/part0/image.png)

## 0.4:New note diagram:

The user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the Save button.

sequenceDiagram
participant browser
participant server

    Note right of browser: New user input is given in the input field and save button clicked!
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    Note right of browser: The browser executes again the callback function that renders the previous notes & new input

![alt text](/part0/image-1.png)

## 0.5: Single page app diagram:

user goes to the single-page app:https://studies.cs.helsinki.fi/exampleapp/spa

sequenceDiagram
participant browser
participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    browser->>server: GET ttps://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "note", "date": "2024-08-05T23:28:47.120Z" }, ... ]
    deactivate server
    Note right of browser: The browser executes again the callback function that renders the data

![alt text](/part0/image-2.png)

## 0.6: New note in Single page app diagram:

        https://studies.cs.helsinki.fi/exampleapp/spa

sequenceDiagram
participant browser
participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    browser->>server: GET ttps://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": " note", "date": "2024-08-06T10:38:09.800Z" }... ]
    deactivate server
    browser->>server:POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    server-->>browser:{"message":"my new note created"}
    Note right of browser:the browser stays on the same page and shows back the new added input
    Note right of browser: {content: "This my new Input", date: "2024-08-06T10:38:09.800Z"}

![alt text](/part0/image-4.png)
