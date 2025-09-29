⚠️ **This project is for demonstration purposes only.**  

## Project Information  

**S O M A**  
*Socio-Cultural Studies of Human Remains and Objects from Mortuary Assemblages in Athens*  

Application to the **Bavarian Academy of Sciences and Humanities** and **Berlin-Brandenburg Academy of Sciences and Humanities**  
*Academies' Programme 2027*  

**Prof. Dr. Philipp Stockhammer** - **Prof. Dr. Nicola Lercari** - **Prof. Dr. Johanna Fabricius**  

**Ludwig-Maximilians-Universität München** - **Freie Universität Berlin**

---

# SOMA Demo Website
This repository hosts the demo website for **SOMA (Socio-Cultural Studies of Human Remains and Objects from Mortuary Assemblages in Athens)**.  
Live site: [https://soma-demo.github.io](https://soma-demo.github.io)

## About the Website
The demo provides an interactive exploration of the SOMA project's data model and features:
- **About** - introduction to the project.  
- **Map** - interactive visualization of cemeteries (currently one example).  
- **Knowledge Graph** - navigation through cemeteries, tombs, graves, burials, objects, and human remains.  
- **Vocabulary** - list of categories used in the Knowledge Graph, linked to external resources.
- **Chatbot** - demo chatbot for interacting with the Knowledge Graph data (predefined answer only).   
- **Documentation** - human-readable documentation of the data model.  
- **Tutorial** - guidance on using the website features.

## Development  
**Design, Data Modelling and Web Development:** [Michela Parma](https://mittelalter.geschichte.uni-mainz.de/michela-parma/) | [GitHub](https://github.com/michelaparma)


## Repository Structure  

- **asset/**  
  Contains shared resources used across the site:  
  - `demo.html` - modal with demo message.  
  - `footer.html` - common footer included in all pages.  
  - `style.css` - custom styling.  

- **data/**  
  Contains ontology, vocabularies, and SHACL model:  
  - `soma.ttl` - main ontology.  
  - `somavoc.ttl` - vocabulary file.  
  - `SOMA_dataModel.shacl` - SHACL data model.  
  - `SHACL_Validator.py` - script for SHACL validation.  

- **html/**  
  Contains the main content pages of the website:  
  - `about.html` - project introduction.  
  - `chatbot.html` - chatbot interface.  
  - `documentation.html` - documentation of the data model.  
  - `knowledge-graph.html` - exploration of the Knowledge Graph.  
  - `map.html` - interactive cemetery map.  
  - `somavoc.html` - vocabulary page.  
  - `tutorial.html` - usage guide.  

- **img/**  
  Images and icons used throughout the site.  

- **mp4/**  
  Video resources used in the demo.  

- **index.html**  
  Main homepage of the demo website.  

- **readme.md**  
  This file.


## License 
This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license.  
See the full license text here: [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/).
