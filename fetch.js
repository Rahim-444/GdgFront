const baseUrl = 'http://localhost:3000/api/v1';

fetch(`${baseUrl}/meets`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch meets');
    }
    return response.json();
  })
  .then(data => {
    console.log('All meets:', data);
  })
  .catch(error => {
    console.error('Error fetching meets:', error);
  });

fetch(`${baseUrl}/actives`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch active members');
    }
    return response.json();
  })
  .then(data => {
    console.log('Online members:', data);
  })
  .catch(error => {
    console.error('Error fetching online members:', error);
  });

fetch(`${baseUrl}/voices`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch voices');
    }
    return response.json();
  })
  .then(data => {
    console.log('Voices:', data);
  })
  .catch(error => {
    console.error('Error fetching voices:', error);
  });
