import { instance } from "../configs";

export const endPoints = {
  handleSubCategories: (data) => instance.get('subcategories/', data),
  handleSubCategoriesId: (data, id) => instance.get(`subcategories/${id}/`, data),
  handleCities: (data) => instance.get('cities/', data),
  handleCitiesId: (data , id) => instance.get(`cities/${id}/`, data),
  handleSchool: (data) => instance.get('schools/', data),
  handleSchoolId: (data, id) => instance.get(`schools/${id}/`, data),
  handleCourses: (data) => instance.get('courses/', data),
  handleCoursesId: (data, id) => instance.get(`courses/${id}/`, data),
}
export const handleCategories = (data) => {
  return instance.get('categories/.json', data)
}
export const handleCategoriesId = (data , id) => {
  return instance.get(`categories/${id}/.json`, data)
}
export const handleSubCategories = (data) => {
  return instance.get('subcategories/.json', data)
}
export const handleSubCategoriesId = (data) => {
  return instance.get(`subcategories/${id}/.json`, data)
}
export const handleRegister = (data) => {
  return instance.get('accounts/register.json', data)
}
export const handleVerifyRegister = (data) => {
  return instance.post('accounts/verify-registration.json()')
}
export const handleSendResetPasswordLink = (data) => {
  return instance.post('accounts/send-reset-password-link.json()')
}
export const handleResetPassword = (data) => {
  return instance.post('accounts/reset-password.json()')
}
export const handleLogIn = (data) => {
  return instance.post('accounts/login.json()')
}
export const handleLogOut = (data) => {
  return instance.post('accounts/logout.json()')
}
export const handleProfile = (data) => {
  return instance.post('accounts/profile.json()')
}
export const handleChangePassword = (data) => {
  return instance.post('accounts/change-password.json()')
}
export const handleRegisterEmail = (data) => {
  return instance.post('accounts/register-email.json()')
}
export const handleVerifyEmail = (data) => {
  return instance.post('accounts/verify-email.json()')
}