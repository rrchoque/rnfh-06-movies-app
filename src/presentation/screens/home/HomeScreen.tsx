import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader, HorizontalCarousel, PosterCarousel } from '../../components';

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, popularNextPage, topRated, upcoming} = useMovies();

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
          movies={popular} 
          title="Populares" 
          loadNextPage={ popularNextPage }
        />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* Próximamente */}
        <HorizontalCarousel movies={upcoming} title="Próximamente" />
        
      </View>
    </ScrollView>
  )
}