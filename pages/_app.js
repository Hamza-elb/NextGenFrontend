import '../styles/globals.css'
import Header from "../components/Header";
import {QueryClientProvider, QueryClient} from "react-query";

function MyApp({Component, pageProps}) {
    const queryClient = new QueryClient();
    return <QueryClientProvider client={queryClient}>
        <Header>
            <Component {...pageProps} />
        </Header>

    </QueryClientProvider>
}

export default MyApp
