import {createContext, FC, ReactNode, useContext, useEffect, useState} from "react"
import {ethers} from "ethers"
import {createDefaultState, createWeb3State, loadContract, Web3State} from "./utils"
import {setupHooks} from "@hooks/web3/setupHooks"

interface Props {
    children: ReactNode
}

const Web3Context = createContext<Web3State>(createDefaultState())

const Web3Provider: FC<Props> = ({children}) => {

    const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState())

    useEffect(() => {
        async function initWeb3() {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum as any)
                const contract = await loadContract("NftMarket", provider)
                setWeb3Api(createWeb3State({
                    ethereum: window.ethereum,
                    provider,
                    contract,
                    isLoading: false
                }))
            } catch (e: any) {
                console.error("Please, install web3 wallet");
                setWeb3Api((api) => createWeb3State({
                    ...api as any,
                    isLoading: false,
                }))
            }
        }

        initWeb3()
    }, [])

    return (
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context)
}

export function useHooks() {
    const {hooks} = useWeb3()
    return hooks
}

export default Web3Provider