import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { getAccessToken } from '../components/api/api_token';

const ProjectsScreen = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const accessToken = await getAccessToken(); // Funktion zum Abrufen des Zugriffstokens

        const response = await fetch('https://api.intra.42.fr/v2/me/projects', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const projectsData = await response.json();
          setProjects(projectsData);
        } else {
          // Handle error response
          console.error('Failed to fetch projects:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="bg-black mt-4">
        <Text className="text-white text-xl ml-6 font-main_medium">
          Projects
        </Text>
      </View>

	  <View className=' bg-orange-600 py-3 px-2 rounded-md my-2 mx-6'>
		<Text className='text-black font-main_medium text-center'>You see all projects. This will be changed to see only Projects in your cursus.</Text>
	  </View>

      <ScrollView className="ml-6 mr-6 mt-3">
        {loading ? (
          <ActivityIndicator size="large" className="justify-center" />
        ) : (
          projects.map((project) => (
            <View
              key={project.id}
              className="bg-neutral-800 p-4 rounded-lg shadow border border-gray-700 mb-4"
            >
              <Text className="text-white text-lg font-main">
                {project.name}
              </Text>
              <Text className="text-white text-sm font-main mt-1">
                {project.description}
              </Text>
            </View>
          ))
        )}
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0">
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
};

export default ProjectsScreen;
