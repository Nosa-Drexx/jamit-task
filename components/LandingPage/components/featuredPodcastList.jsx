'use client'
import podcastCategories from "@/data/podcastCategories.json";
import styles from '../styles/featuredPodcastList.module.css'
import { useEffect, useState } from "react";

const FeaturedPodcastList = () => {
    const [podcast, setPodcast] = useState(podcastCategories.categories);
    const [featuredPodcast, setFeaturedPodcast] = useState([])

    useEffect(() => {
        const featured = [];
        for(let elem of podcast) {
            //not more than 7 featured posts
            if(featured.length >= 7){
                break;
            }
            featured.push(...elem.podcasts)
        }
        setFeaturedPodcast(() => featured);
      }, []);

    return (
        <div className={styles.listContainer}>{featuredPodcast.map((elem)=><div className={styles.list} key={elem.title}>{elem.title}</div>)}</div>
    );
  };
  
  export default FeaturedPodcastList;