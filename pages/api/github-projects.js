export default async function handler(req, res) {
  const username = 'levivitordev'

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
    
    if (!response.ok) {
      throw new Error('Falha ao buscar repositórios')
    }
    
    const repos = await response.json()

    const limitedRepos = repos.slice(0, 4)

    const projects = limitedRepos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated_at: repo.updated_at
    }))
    
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}