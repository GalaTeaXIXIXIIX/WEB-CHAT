/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import Image from "next/image";
import { UserItem } from "./components/User/UserItem";
import { UserList } from "./components/User/UserList";
import { ChatList } from "./components/Chat/ChatList";
import { ChatForm } from "./components/Chat/ChatForm";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link
            href="https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </head>
        <body
          className="h-screen overflow-hidden flex items-center justify-center"
          style={{ background: "#edf2f7" }}
        >
          <div>
            <section>
              <main>{props.children}</main>
            </section>
          </div>
        </body>
      </html>
    </Providers>
  );
}
