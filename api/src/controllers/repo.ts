import { Request, Response } from 'express'
import { searchRepos, getDetails } from '../services/repoService'

export const search = async (req: Request, res: Response) => {
  try {
    const result = await searchRepos(req.query.searchString as string)
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: error?.message })
  }
}

export const details = async (req: Request, res: Response) => {
  try {
    const result = await getDetails(req.query.owner as string, req.query.repo as string)
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: error?.message })
  }
}

export default {
  search,
  details
}
