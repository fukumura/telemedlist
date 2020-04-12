import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()

export const state = () => {
  return {
    loading: true
  }
}

export const mutations = {
  ...vuexfireMutations

}

export const actions = {
  bindPrefName: firestoreAction(({ bindFirestoreRef }, payload) => {
    const pref = bindFirestoreRef(
      'prefectures',
      db
        .collection('prefectures')
        .where('id', '==', payload.id)
    )
    return pref
  })
}

export const getters = {
}
