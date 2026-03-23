import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 8,
  },

  seccionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#2E7D32',
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 4,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 14,
    marginBottom: 10,
    gap: 12,
    elevation: 1,
  },

  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardBody: {
    flex: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },

  cardTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
    marginRight: 8,
  },

  cardHora: {
    fontSize: 11,
    color: '#999',
  },

  cardDesc: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },

  emptyRow: {
    alignItems: 'center',
    marginTop: 32,
    gap: 8,
  },

  emptyText: {
    fontSize: 13,
    color: '#CCC',
  },

});

export default styles;