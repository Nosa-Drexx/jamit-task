import background from '@/data/backgroundGradient.json'

export function categoriesSelector(categoryArr, select) {
    const allCategories: any = [];
    const gradient = background.gradient;
    for (let podcasts of categoryArr) {
    const randomBackgroundIndex = Math.floor(Math.random() * gradient.length)
    const randomBackground = gradient[randomBackgroundIndex];
    const podcastArr = podcasts.podcasts.map((elem)=>({...elem, ...randomBackground}))
  if(select === 'All') {
    //For all Categories
        allCategories.push(...podcastArr);
      }    
  else {
    //For Categories based on category_names
        if(podcasts.category_name === select){
            allCategories.push(...podcastArr);
        }
    }
  }
  return allCategories;
}