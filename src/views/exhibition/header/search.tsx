import React, { memo, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch, shallowEqualApp } from "@/store";
import { changeSearchKeyWords } from "@/store/modules/keyWords";
import { formatParams } from "@/utils";

import searchSVG from "@assets/image/search.svg";


const Search = () => {
    const { searchKeyWord } = useAppSelector(state => ({
        searchKeyWord: state.keyWords.searchKeyWord
    }), shallowEqualApp);
    const action = useAppDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    if (searchKeyWord && location.pathname === "/loading") { action(changeSearchKeyWords("")) }

    const [keyWords, setKeyWords] = useState<string>(searchKeyWord);
    useEffect(() => {
        setKeyWords && setKeyWords(searchKeyWord.replaceAll(/\++/g, " ").trim());
    }, [searchKeyWord])
    const inputRef = useRef<HTMLInputElement | null>(null);

    const navigateLoading = () => {
        navigate(`/loading/${formatParams(keyWords).join("+")}`);
    }

    return <div className="grid content-center w-5/6 md:w-1/2 h-24 mx-auto mt-10 mb-8">
        <div className="relative w-5/6 mx-auto">
            <input type="text" value={keyWords} placeholder="try to input: l | r | c | m" onChange={(e) => { setKeyWords(e.target.value) }} className="w-full h-12 pl-8 pr-12 sm:pr-16  rounded-2xl text-neutral-700 font-semibold" ref={inputRef} onKeyDown={(e) => e.key === "Enter" && navigateLoading()} />
            <img src={searchSVG} alt="search" onClick={navigateLoading} className="absolute top-3 sm:top-1 right-5 w-6 sm:w-10 aspect-square cursor-pointer" />
        </div>
    </div>
}

export default memo(Search);