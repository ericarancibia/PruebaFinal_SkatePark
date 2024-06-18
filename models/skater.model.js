import pool from "../database/connection.js";

export const findAllUsersQuery = async () => {
    try {
      const query = {
        text: 'SELECT * FROM SKATERS',
      }
      const { rows } = await pool.query(query)
      return rows
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const createUSerQuery = async (email, nombre, password, anos_experiencia, especialidad, foto, estado) => {
    try {
      const query = {
        text: "INSERT INTO SKATERS (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ",
        values: [email, nombre, password, anos_experiencia, especialidad, foto, estado]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const findUserByEmailQuery = async (mail) => {
    try {
      const query = {
        text: "SELECT * FROM SKATERS WHERE email = $1",
        values: [mail]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const findUserByIdQuery = async (id) => {
    try {
      const query = {
        text: "SELECT * FROM SKATERS WHERE id = $1",
        values: [id]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const deleteUserQuery = async (id) => {
    try {
      const query = {
        text: "DELETE FROM SKATERS WHERE id = $1 RETURNING *",
        values: [id]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const updateUserQuery = async (skater) => {
    try {
      const query = {
        text: "UPDATE SKATERS SET nombre= $1, password= $2, anos_experiencia= $3, especialidad= $4 WHERE id= $5 RETURNING *",
        values: [skater.nombre, skater.password, skater.anos_experiencia, skater.especialidad, skater.id]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const updateStatusQuery = async (id, estado) => {
    try {
      const query = {
        text: "UPDATE SKATERS SET estado= $1 WHERE id= $2 RETURNING *",
        values: [estado, id]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (error) {
      console.error(error)
      throw error
    }
  }