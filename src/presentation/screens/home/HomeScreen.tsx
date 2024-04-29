import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components';

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return <Text>Cargando</Text>
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Populares */}

        {/* Top Rated */}

        {/* Próximamente */}
        
      </View>
    </ScrollView>
  )
}