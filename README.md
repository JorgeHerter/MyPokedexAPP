My Pokedex Application

Project Overview

Welcome to the My Pokedex Application, a classic implementation of a comprehensive database for Pokémon data. This application is built using Vanilla JavaScript and jQuery for DOM manipulation, fetching real-time information from the public PokeAPI, and presenting details in a Bootstrap modal.

The project uses the Module Pattern (IIFE) to encapsulate the pokemonRepository logic, ensuring clean separation of concerns and robust data handling.

🚀 Key Features

Asynchronous Data Loading: Uses the Module Pattern (pokemonRepository) to fetch the initial list of 100 Pokémon names and URLs using modern ES6 fetch and Promises.

Loading Indicator: Displays a clear loading message/indicator (showLoadingMessage) during all API fetch operations for better user experience.

Interactive List: Renders Pokémon names as clickable buttons using jQuery for DOM manipulation.

Detailed Modal View: Clicking a Pokémon triggers a secondary fetch for detailed data (image, height, etc.), which is displayed in a fully functional Bootstrap modal (#myModal).

Basic Data Insight: Provides simple commentary on the Pokémon's height (e.g., "Wow, That's big!") to demonstrate basic data processing.

🛠 Tech Stack

This application is built using a dependency stack ideal for rapid, client-side data presentation:

Category

Technology

Purpose

Core

Vanilla JavaScript (ES6+)

Core application logic, Promises, and the IIFE Module Pattern.

DOM/Utilities

jQuery

Used extensively for DOM manipulation, event binding, and simplifying UI operations.

UI/Styling

Bootstrap (CSS/JS)

Provides responsive default styling and powers the modal window component.

API

PokeAPI (External)

Data source for all Pokémon information.

Structure

IIFE (Module Pattern)

Encapsulating the data (pokemonList) and methods (add, getAll, loadList, loadDetails).

⚙️ Installation and Setup

Since this is a client-side application utilizing CDNs for dependencies, setup is straightforward.

Prerequisites

A modern Web Browser.

A running web server (for local testing, you can use VS Code's "Live Server" extension or any simple web server).

Local Steps

Clone the Repository:

git clone [https://github.com/JorgeHerter/MyPokedexAPP.git](https://github.com/JorgeHerter/MyPokedexAPP.git)
cd MyPokedexAPP


Dependencies: Ensure the main HTML file links to the required Bootstrap and jQuery CDN files (these are typically included directly in the <head> or before the closing </body> tag).

Run: Open the main index.html file in your browser via a local server to run the application.

Data Source

All Pokémon data is retrieved from the PokeAPI (https://pokeapi.co/). This is a free, public, and open-source RESTful API that does not require an API key for access.

📂 Code Structure Highlights

The main application logic is contained within a single Module Pattern implementation for maintainability:

pokemonRepository (IIFE): Exposes public methods (add, getAll, loadList, loadDetails) while keeping the data array (pokemonList) private.

loadList(): Fetches primary data from PokeAPI and uses the private add function to populate the list.

loadDetails(pokemon): Fetches specific data for a single Pokémon using its unique URL.

addListItem(pokemon): Handles the creation of the list items and attaches the event listener that calls showDetails.

showDetails(pokemon): Manages the modal content population and displays the Bootstrap modal.
