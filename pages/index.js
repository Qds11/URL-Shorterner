import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import axios from 'axios';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

export default function Home() {

  const [longurl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(false);
  const [copied, setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(shortUrl);
      setIsCopied(true);
    };
  const handleUrlChange = (event) => {
    setLongUrl(event.target.value.trim());
    setError(!isValidUrl(event.target.value)); // set error if the input value is not a valid URL
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error || !longurl) {
      return;
    }
    try {
      const response = await axios.post("/api/shorten-url", { longurl });
      setShortUrl(`${response.data.shortUrl}`);
      setIsCopied(false);

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
            maxWidth: 450,
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
            <Button variant="outlined" endIcon={<SendIcon />} type="submit">
              Shorten
            </Button>
          </form>
          {shortUrl && (
            <Card
              sx={{
                maxWidth: 350,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                margin: "auto",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  position: "relative",
                }}
              >
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                  {shortUrl}
                </a>

                <Fab
                  size="small"
                  aria-label="add"
                  onClick={handleCopyToClipboard}
                >
                  <ContentCopyIcon />
                </Fab>
                <Typography
                  variant="caption"
                  display="inline"
                  gutterBottom
                  sx={{
                    position: "absolute",
                    bottom: 1,
                    right: 33,
                  }}
                >
                  {copied ? "Copied!" : ""}
                </Typography>

                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCopyToClipboard}
                ></Button> */}
              </CardContent>
            </Card>
          )}
        </Box>
      </main>
    </div>
  );
}
