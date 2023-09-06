# GitaVerse

A browser extension, which gives a verse from Bhagavad Gita. (Future) Website for Bhagavad Gita

## Tech Stack
- Next.js
- TypeScript
- TailwindCSS

## Setup the extension
To make the extension public, I have to pay for the $5 to sign up a developer account. So I have one alternative,
1. Clone the project by running
```bash
git clone https://github.com/Deveesh-Shetty/GitaVerse.git
```

2. Open the project in your desired editor, and create a `.env` file in the root folder of the project with the following data,
```
NEXT_PUBLIC_GITA_API_KEY = "Your API KEY"
```
> The API key you can get from [rapid API](https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3)

3. Now install the dependencies and build the extension locally using the commands
```bash
npm ci
npm run build:extension
```

4. Once finished you will see an `out` folder that is created. The hard part is done now it's easy!

5. Go to `chrome://extensions/` in the browser and at the top-right turn on `developer mode`

6. Once you turn on developer mode, you will get three options, click `load unpacked`

8. Navigate to the folder where you have cloned the repository, select the `out` directory, and click `select`.

9. You have Successfully installed the extension! You can see **GitaVerse** in the list of extensions.
<p  align="center">
  <img src="https://github.com/Deveesh-Shetty/GitaVerse/assets/89470104/60c4328d-6eab-4b5c-b257-da12a5a04882" alt="GitaVerse Extension List"/>
</p>

**If you faced any problem, or error while following the steps, feel free to contact me and raise an issue. I am more than ready to help!**

## Plans
- Have a website that displays the entire Bhagavad Gita in an ancient scripture like a webpage, which should feel like reading the epic itself. It would be great if someone designed it or gave some more ideas.
- My current Idea: War theme, Golden, Blue, and Royal colors, and a script-roll opening animation when the viewer clicks the verse. Book opening animation when the viewer opens the chapter. 
-[x] Browser Extension will be just one part of the website (I have to figure out how to separate both the website and extension)

Open to contributions and suggestions! The project is still in the budding stage, and I would love to get help on this!!

## Browser Extension Preview

![GitaVerse Browser Extension](https://github.com/Deveesh-Shetty/GitaVerse/assets/89470104/729b6788-085f-4861-b638-3da495371740)
