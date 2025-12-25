import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Admin = () => {
  const { logout, getAuthHeaders, API_URL } = useAuth()
  const { language } = useLanguage()
  const t = translations[language]
  const navigate = useNavigate()
  
  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState('')
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)

  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState('')
  const fileInputRef = useRef(null)

  const loadUploadedFiles = async () => {
    try {
      const response = await fetch(`${API_URL}/upload/files`, {
        headers: getAuthHeaders()
      })
      
      if (response.ok) {
        const data = await response.json()
        setUploadedFiles(data.files || [])
      }
    } catch (error) {
      console.error('Error loading files:', error)
    }
  }

  // Load uploaded files on mount
  useEffect(() => {
    loadUploadedFiles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }))
    setPasswordError('')
    setPasswordSuccess('')
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault()
    setPasswordError('')
    setPasswordSuccess('')
    setIsUpdatingPassword(true)

    try {
      const response = await fetch(`${API_URL}/admin/update-password`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(passwordData)
      })

      const data = await response.json()

      if (response.ok) {
        setPasswordSuccess('Password updated successfully!')
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        })
      } else {
        setPasswordError(data.error || 'Failed to update password')
      }
    } catch (error) {
      setPasswordError('Network error. Please try again.')
    } finally {
      setIsUpdatingPassword(false)
    }
  }

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return

    setIsUploading(true)
    setUploadError('')
    setUploadSuccess('')

    try {
      const formData = new FormData()
      if (files.length === 1) {
        formData.append('file', files[0])
      } else {
        files.forEach(file => formData.append('files', file))
      }

      const endpoint = files.length === 1 ? '/file' : '/files'
      const response = await fetch(`${API_URL}/upload${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': getAuthHeaders().Authorization
        },
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        setUploadSuccess(`Successfully uploaded ${files.length} file(s)`)
        loadUploadedFiles()
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        setUploadError(data.error || 'Upload failed')
      }
    } catch (error) {
      setUploadError('Network error. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDeleteFile = async (filename) => {
    if (!window.confirm('Are you sure you want to delete this file?')) {
      return
    }

    try {
      const response = await fetch(`${API_URL}/upload/file/${filename}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      })

      if (response.ok) {
        setUploadedFiles(prev => prev.filter(file => file.filename !== filename))
        setUploadSuccess('File deleted successfully')
      } else {
        setUploadError('Failed to delete file')
      }
    } catch (error) {
      setUploadError('Network error. Please try again.')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">
          {/* Password Change Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Change Password
            </h2>

            {passwordError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {passwordError}
              </div>
            )}

            {passwordSuccess && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {passwordSuccess}
              </div>
            )}

            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Enter new password (min 6 characters)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdatingPassword ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>

          {/* File Upload Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              File Upload
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              Supported formats: JPG, PNG, GIF, MP4, MP3 (Max 100MB per file)
            </p>

            {uploadError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {uploadError}
              </div>
            )}

            {uploadSuccess && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {uploadSuccess}
              </div>
            )}

            <div className="mb-6">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.gif,.mp4,.mp3"
                onChange={handleFileSelect}
                disabled={isUploading}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block cursor-pointer bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {isUploading ? 'Uploading...' : 'Choose Files'}
              </label>
            </div>

            {/* Uploaded Files List */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Uploaded Files</h3>
              {uploadedFiles.length === 0 ? (
                <p className="text-gray-500">No files uploaded yet</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.filename}
                      className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {file.filename}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteFile(file.filename)}
                          className="ml-2 text-red-600 hover:text-red-800"
                          title="Delete file"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <a
                        href={`${API_URL.replace('/api', '')}${file.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-orange-600 hover:text-orange-800 underline"
                      >
                        View File
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
