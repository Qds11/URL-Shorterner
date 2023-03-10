import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import axios from 'axios';


export default function Home() {

  const [longurl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(false);
  const { NEXT_PUBLIC_BASE_URL } = process.env;

  const handleUrlChange = (event) => {
    setLongUrl(event.target.value.trim());
    setError(!isValidUrl(event.target.value)); // set error if the input value is not a valid URL
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error) {
      return;
    }
    try {
      const response = await axios.post("/api/shorten-url", { longurl });
      setShortUrl(`${response.data.shortUrl}`);

    } catch (error) {
      console.error(error);
    }
  };

  const isValidUrl = (inputurl) => {
    const regex = /^((http|https):\/\/)?([\w.]+\/?)\S*\.com$/;
    return regex.test(inputurl); //test if input is valid url
  };

  return (
    <div>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box
          sx={{
            minWidth: 500,
            padding: 4,
            border: "1px solid black",
            borderRadius: 5,
          }}
        >
          <h1>URL Shortener</h1>
          <form onSubmit={handleSubmit} className={styles.content}>
            <TextField
              id="url-input"
              label="URL"
              variant="outlined"
              error={error}
              helperText={error ? "Invalid URL" : ""}
              value={longurl}
              color="primary"
              onChange={handleUrlChange}
            />
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SendIcon />}
              type="submit"
            >
              Shorten URL
            </Button>
          </form>
          {shortUrl && (
            <div>
              <label htmlFor="shortUrl">Short URL:</label>
              <a href={shortUrl} target="_blank">
                {shortUrl}
              </a>
            </div>
          )}
        </Box>
      </main>
    </div>
  );
}
